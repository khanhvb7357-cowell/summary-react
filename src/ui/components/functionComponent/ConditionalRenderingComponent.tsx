import React from "react";

function ConditionalRenderingComponent() {
  const status = "info";
  const text = "information";
  return <Notification text={text} status={status} />;
}

export default ConditionalRenderingComponent;

type Status = "info" | "warning" | "error";
interface NotificationProps {
  text: string;
  status: Status;
}

// function Notification({ text, status }: NotificationProps) {
//   switch (status) {
//     case "info":
//       return <Info text={text} />;
//     case "warning":
//       return <Warning text={text} />;
//     case "error":
//       return <Error text={text} />;
//     default:
//       return null;
//   }
// }

function Notification({ text, status }: NotificationProps) {
  return (
    <div>
      {(function () {
        switch (status) {
          case "info":
            return <Info text={text} />;
          case "warning":
            return <Warning text={text} />;
          case "error":
            return <Error text={text} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

function Info({ text }: { text: string }) {
  return <label style={{ color: "blue" }}>{text}</label>;
}
function Warning({ text }: { text: string }) {
  return <label style={{ color: "yellow" }}>{text}</label>;
}
function Error({ text }: { text: string }) {
  return <label style={{ color: "red" }}>{text}</label>;
}
