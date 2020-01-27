import React from 'react';
import { createStructuredSelector } from 'reselect';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/utils';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import CartIcon from '../../components/cart-icon';
import CartDropdown from '../../components/cart-dropdown';
import { ReactComponent as Logo } from '../../images/crown.svg';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer, OptionDiv } from './styles';

// import './styles.scss';

const Header = ({ currentUser, isHidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        Shop
      </OptionLink>
      <OptionLink to='/contact'>
        Contact
      </OptionLink>
      {console.log('check', currentUser)}
      {
        currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            Sign out
          </OptionDiv>
        ) : (
          <OptionLink to='/sign-in'>
            Sign in
          </OptionLink>
        )
      }
      <OptionLink to='/sign-in'>
            Sign in
          </OptionLink>
      <CartIcon />
    </OptionsContainer>
    {!isHidden && <CartDropdown />}
  </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
