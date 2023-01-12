import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 90%;
  width: 100%;
  @media (max-width: 50em) {
    flex-direction: column;
		padding: 2rem 0;
  }
`;
export const Image = styled.section`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
	@media(max-width: 50em){
		width: 100%;
		margin-bottom: 4rem;
	}  
	img {
    width: 100%;
    object-fit: contain;
    height: 70%;
		@media(max-width: 50em){
			height: 100%:
			object-fit: cover;
		}
  }
`;
