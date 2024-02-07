import { Form, Input } from "antd";
import { FC } from "react";
import { Controller } from "react-hook-form";

interface IInputProps {
  name: string;
  type: string;
  label: string;
}

const PHInput: FC<IInputProps> = ({ name, type, label }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input type={type} {...field} />
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error.message}</p>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
