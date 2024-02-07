/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { FC, ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IFromProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}

const PHForm: FC<IFormConfig & IFromProps> = ({
  children,
  defaultValues,
  resolver,
  onSubmit,
}) => {
  const formConfig: IFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
