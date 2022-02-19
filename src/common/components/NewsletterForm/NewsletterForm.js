import { useState } from "react";
import { decode } from "html-entities";
import Input from "../Input";
import { Controller, useForm } from "react-hook-form";
import Text from "../Text";
import NewsletterFormWrapper from "./NewsletterForm.style";
import Button from "../Button";

const NewsletterForm = ({ status, message, onValidated }) => {
  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const values = watch();

  const onSubmit = () => {
    onValidated({
      EMAIL: values.email,
      FNAME: values.name,
    });
    return true;
  };

  const onError = () => {
    // error
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }

    // const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
    // console.log(message.match(linkRx));

    const msg = message.split("<a")[0];

    const result = msg?.split("-") ?? null;

    if ("0" !== result?.[0]?.trim()) {
      return decode(msg);
    }

    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <NewsletterFormWrapper
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit, onError)}
        className="d-flex newsletter-input-fields"
      >
        <div className="form-field">
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { name, value, onChange } }) => {
              return (
                <Input
                  required
                  defaultValue={value || ""}
                  name={name}
                  value={value || ""}
                  onChange={onChange}
                  placeholder="First Name"
                />
              );
            }}
          />
        </div>
        <div className="form-field">
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { name, value, onChange } }) => {
              return (
                <Input
                  required
                  defaultValue={value || ""}
                  name={name}
                  value={value || ""}
                  onChange={onChange}
                  placeholder="Email Address"
                />
              );
            }}
          />
        </div>
        <div className="submit-btn">
          {status === "sucess" ? (
            <Text dangerouslySetInnerHTML={{ __html: decode(message) }} />
          ) : (
            <Button
              isLoading={status === "sending"}
              disabled={status === "sending"}
              type="submit"
              className="light"
              title="Sign Up Today!"
            />
          )}
        </div>
      </NewsletterFormWrapper>
      <div
        className="newsletter-form-info"
        style={{
          padding: "20px 0",
        }}
      >
        {status === "error" ? (
          <Text
            style={{
              position: "absolute",
              color: "red",
            }}
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: getMessage(message) }}
          />
        ) : null}
      </div>
    </>
  );
};

export default NewsletterForm;
