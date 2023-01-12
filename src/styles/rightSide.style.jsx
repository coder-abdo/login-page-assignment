import styled from "styled-components";

export const RightContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.16);
  border-radius: 1.2rem;
	padding: 8rem 0;
	@media(max-width: 50em){
		width: 100%;
		padding: 2rem 0;
	}
`;
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
	margin: 0;
  margin-bottom: 2rem;
  text-align: center;
	@media(max-width: 50em){
		font-size: 2rem;
	}
`;
export const Form = styled.form`
  padding: 0 10rem;
	@media(max-width: 50em){
		padding: 0 4rem; 
	}
`;
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
  position: ${(props) => (props.password ? "relative" : "static")};
`;
export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;
export const HideIcon = styled.img`
  width: 2.4rem;
  height: 2rem;
  object-fit: cover;
  position: absolute;
  top: 60%;
  right: 2rem;
	cursor: pointer;
	@media(max-width: 50em){
		width: 1.6rem;
		height: 1rem;
		top: 68%;
	}
`;
export const Input = styled.input`
  border: 1px solid rgba(4, 7, 47, 0.4);
  height: 5.6rem;
  text-indent: 1rem;
  border-radius: 1.2rem;
  font-family: "Poppins", sans-serif;
  ::placeholder {
    font-size: 1.6rem;
    color: #737b86;
  }
	@media(max-width: 50em){
		height: 3.8rem;
	}	
`;
export const Link = styled.a`
  color: #f78719;
  font-size: 1.6rem;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
`;
export const RemeberMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RemeberMeCheckLabel = styled(Label)`
  display: flex;
  align-items: center;
`;
export const TermsCheckLabel = styled(Label)`
  margin-bottom: 0;
`;
export const CheckBox = styled.input`
  margin-right: 3px;
`;
export const LoginButton = styled.button`
  padding: 1.6rem 0;
  font-size: 1.6rem;
  background-color: #1575a7;
  color: #fff;
  border-radius: 8px;
  width: 100%;
  border: 1px solid #1575a7;
  outline: none;
  margin: 2rem 0;
`;
export const HaveAccount = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: #04072f;
  text-align: center;
`;
