import ButtonText from "../components/ButtonTextComponent/ButtonText";
import Form from "../components/Form/Form";

function Home() {
  return (
    <div>
      Home
      <ButtonText text="CREATE" />
      <Form label={"Comic Title"} input={`type="text"`} />
    </div>
  );
}

export default Home;
