import styled from "@emotion/styled";
export const Item = styled.li`
  margin: 10px 0;
`;
export const AddForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  justify-content: space-between;
  align-items: stretch;
`;
export const AddFormLabel = styled.label`
  font-size: 20px;
  margin: 0 0 20px 0;
`;
export const AddFormInput = styled.input`
  margin: 0 0 0 10px;
`;
export const AddFormBtn = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #cc99aa;
  :hover {
    background-color: #aa99aa;
  }
  :focus {
    background-color: #aa99aa;
  }
`;
