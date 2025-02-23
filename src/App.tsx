import {
  Banner,
  BannerContent,
  Button,
  FlexItem,
  FlexLayout,
  FormField,
  FormFieldLabel,
  H2,
  Input,
  ListBox,
  Option,
  Panel,
  StackLayout,
} from "@salt-ds/core";
import { FavoriteIcon } from "@salt-ds/icons";

function App() {
  return (
    <FlexLayout aria-label="The Form" direction="column" id="the-form">
      <FlexItem>
        <Panel style={{ width: "100%" }}>
          <H2>Personal Info</H2>
          <StackLayout gap={2}>
            <FormField>
              <FormFieldLabel>What's your name?</FormFieldLabel>
              <Input defaultValue="" />
            </FormField>
            <FormField>
              <StackLayout gap={1}>
                <FormFieldLabel>Where are you from?</FormFieldLabel>
                <ListBox
                  bordered
                  style={{ maxHeight: 200, width: 200 }}
                  selected={["Here"]}
                >
                  {["Here", "There", "Everywhere"].map((location) => (
                    <Option value={location}>{location}</Option>
                  ))}
                </ListBox>
              </StackLayout>
            </FormField>
            <Banner status="info">
              <BannerContent>
                To see if you can join, you must first rate this form.
              </BannerContent>
            </Banner>
          </StackLayout>
        </Panel>
      </FlexItem>
      <FlexLayout>
        <FlexItem>
          <Panel style={{ width: 400 }}>
            <H2>Rating</H2>
            <StackLayout gap={2}>
              <FormField>
                <StackLayout gap={1}>
                  <FormFieldLabel>How would you rate this form?</FormFieldLabel>
                  <StackLayout direction="row" gap={1}>
                    <FavoriteIcon size={2} />
                    <FavoriteIcon size={2} />
                    <FavoriteIcon size={2} />
                    <FavoriteIcon size={2} />
                    <FavoriteIcon size={2} />
                  </StackLayout>
                </StackLayout>
              </FormField>
            </StackLayout>
          </Panel>
        </FlexItem>
        <FlexItem align="center" style={{ textAlign: "center", width: 200 }}>
          <Button sentiment="accented">SUBMIT</Button>
        </FlexItem>
      </FlexLayout>
    </FlexLayout>
  );
}

export default App;
