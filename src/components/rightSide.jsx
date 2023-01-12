import {
  CheckBox,
  Form,
  FormControl,
  HideIcon,
  Input,
  Label,
  Link,
  RemeberMe,
  RemeberMeCheckLabel,
  RightContainer,
  TermsCheckLabel,
  Title,
  LoginButton,
  HaveAccount,
} from "../styles/rightSide.style";

export const RightSide = () => {
  return (
    <RightContainer>
      <Title>Login</Title>
      <Form>
        <FormControl>
          <Label htmlFor="loginId">Login ID</Label>
          <Input type="text" placeholder="Enter Login ID" />
        </FormControl>
        <FormControl password>
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="Password" />
          <HideIcon src="./hidePassword.svg" alt="icon" />
        </FormControl>
        <RemeberMe>
          <RemeberMeCheckLabel htmlFor="remeberMe">
            <CheckBox type="checkbox" />
            Remeber Me
          </RemeberMeCheckLabel>
          <Link href="!#">Change Password</Link>
        </RemeberMe>
        <div className="terms">
          <TermsCheckLabel htmlFor="terms">
            <CheckBox type="checkbox" />
            Agree To
          </TermsCheckLabel>
          <Link underline href="!#">
            Terms & Conditions
          </Link>
        </div>
        <LoginButton type="submit">Login</LoginButton>
        <HaveAccount>
          Don't have an account?<Link href="!#">Register Here</Link>
        </HaveAccount>
      </Form>
    </RightContainer>
  );
};
