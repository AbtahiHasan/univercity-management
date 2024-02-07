import { Form, Select } from "antd";
import { FC } from "react";
import { Controller } from "react-hook-form";

interface ISelectProps {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
}

const PHSelect: FC<ISelectProps> = ({ label, name, options, disabled }) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            options={options}
            {...field}
            size="large"
            disabled={disabled}
          />
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
