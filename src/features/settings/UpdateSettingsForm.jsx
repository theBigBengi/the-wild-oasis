import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value || settings[field] === +value) return;

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          defaultValue={minBookingLength}
          disabled={isUpdating}
          id='min-nights'
          type='number'
        />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          id='max-nights'
          type='number'
        />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          id='max-guests'
          type='number'
        />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          id='breakfast-price'
          type='number'
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
