import { trpc } from "@/utils/trpc";

export const Overview: React.FC<{}> = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Nicolai" }]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>{data?.greeting}</div>
    </div>
  );
};
