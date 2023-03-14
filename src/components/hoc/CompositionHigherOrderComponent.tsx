import React from "react";

function CompositionHigherOrderComponent() {
  const data = [
    { key: 1, item: "aaaaa" },
    { key: 2, item: "bbbbb" },
  ];

  return <HocList data={data} />;
}

export default CompositionHigherOrderComponent;

interface BaseHocListProps {
  data: Array<HocItemProps>;
}

function BaseHocList({ data }: BaseHocListProps) {
  return (
    <ul>
      {data.map((item) => (
        <HocItem key={item.key} item={item.item} />
      ))}
    </ul>
  );
}

interface HocItemProps {
  key: number;
  item: string;
}

function HocItem(props: HocItemProps) {
  return <li>{props.item}</li>;
}

// COMPOSITION OF HIGHER-ORDER COMPONENTS
const withLoadingFeedback =
  (feedback: string) => (Component: any) => (props: any) => {
    if (props.isLoading) return <div>{feedback}</div>;
    return <Component {...props} />;
  };

const withNoDataFeedback =
  (feedback: string) => (Component: any) => (props: any) => {
    if (!props.data) return <div>{feedback}</div>;
    return <Component {...props} />;
  };

const withDataEmptyFeedback =
  (feedback: string) => (Component: any) => (props: any) => {
    if (!props.data.length) return <div>{feedback}</div>;
    return <Component {...props} />;
  };

const compose = (...fns: any[]) =>
  fns.reduceRight(
    (prevFn, nextFn) =>
      (...args: any[]) =>
        nextFn(prevFn(...args)),
    (value: any[]) => value
  );

const HocList = compose(
  withLoadingFeedback("Loading Todos."),
  withNoDataFeedback("No Todos loaded yet."),
  withDataEmptyFeedback("Todos are empty.")
)(BaseHocList);
