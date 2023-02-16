import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const ToastMessage = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    margin-top: 70px;
    width: 530px;
    text-align: center;
  }
  .Toastify__toast-body {
    font-size: 24px;
  }
  .Toastify__progress-bar--error {
    height: 65px;
  }
`;
