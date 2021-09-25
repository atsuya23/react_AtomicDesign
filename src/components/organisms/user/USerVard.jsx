import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://www.homepage-tukurikata.com/image/lion.jpg"
        alt="プロフィール写真"
      />
      <p>name</p>
      <SDl>
        <dt>mail</dt>
        <dd>1111@mail.com</dd>
        <dt>Tel</dt>
        <dd>000-1111-2222</dd>
        <dt>farm</dt>
        <dd>AAA Factory</dd>
        <dt>WEB</dt>
        <dd>YYY.com</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
