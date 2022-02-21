import styled from "styled-components";

const NewsletterFormWrapper = styled.form`
  .form-field {
    display: flex;
    flex-direction: column;
    border: none;

    + .form-field {
      margin-top: 1.625rem;
    }

    input {
      height: 3.125rem;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    margin-top: 3.625rem;
    width: 30rem;

    button {
      width: 21.5rem;
      min-width: 21.5rem;
      background: #fff;
      height: 3.438rem;
      min-height: 3.438rem;
      font-size: 1.125rem;
    }
  }
`;

export default NewsletterFormWrapper;
