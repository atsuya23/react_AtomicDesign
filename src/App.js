import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/USerVard";
import "./styles.css";

const user = {
  name: "Curry",
  image: "https://www.homepage-tukurikata.com/image/lion.jpg",
  mail: "12345@example.com",
  phone: "090-1234-5678",
  company: {
    name: "test Company"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>second</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
