import React, { FunctionComponent } from "react";

function HigherOrderComponent() {
  //   const { data, isLoading } = fetchData();
  const data = [
    { key: 1, item: "abc" },
    { key: 2, item: "abcd" },
  ];

  return <HocList data={data} />;
}

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

interface ConfigurationWithConditionFeedback {
  loadingFeedback?: string;
  noDataFeedback?: string;
  dataEmptyFeedback?: string;
}
// CONFIGURATION OF HIGHER-ORDER COMPONENTS
const withConditionFeedBackConfiguration =
  (configuration: ConfigurationWithConditionFeedback) =>
  (Component: any) =>
  (props: any) => {
    if (props.isLoading)
      return <div>{configuration.loadingFeedback || "Loading data."} </div>;
    if (!props.data)
      return (
        <div>{configuration.noDataFeedback || "No data loaded yet."} </div>
      );
    if (!props.data.length)
      return <div> {configuration.dataEmptyFeedback || "Data is empty."}</div>;
    return <Component {...props} />;
  };
const HocListConfiguration = withConditionFeedBackConfiguration({
  loadingFeedback: "Loading Todos.",
  noDataFeedback: "No Todos loaded yet.",
  dataEmptyFeedback: "Todos are empty.",
})(BaseHocList);

const withConditionFeedBack = (Component: any) => (props: any) => {
  if (props.isLoading) return <div>Loading data.</div>;
  if (!props.data) return <div>No data loaded yet.</div>;
  if (!props.data.length) return <div>Data is empty.</div>;
  return <Component {...props} />;
};
const HocList = withConditionFeedBack(BaseHocList);

export default HigherOrderComponent;
