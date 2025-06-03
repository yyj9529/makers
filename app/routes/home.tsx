import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Home Route Page" },
    { name: "description", content: "Welcome to the home route!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  // Add your data loading logic here
  console.log("Request in loader:", request.url);
  return { message: "Hello from home route loader!" };
}

export async function action({ request }: ActionFunctionArgs) {
  // Add your form handling logic here
  const formData = await request.formData();
  const intent = formData.get("intent");
  console.log("Home Route Action intent:", intent);
  return { ok: true, intent };
}

interface HomeRoutePageProps {
  loaderData?: Awaited<ReturnType<typeof loader>>;
  actionData?: Awaited<ReturnType<typeof action>>;
}

export default function HomeRoutePage({ loaderData, actionData }: HomeRoutePageProps) {
  return (
    <div>
      <h1>Home Route Page</h1>
      <p>{loaderData?.message}</p>
      {actionData?.ok && <p>Action was successful! Intent: {String(actionData.intent)}</p>}
      <form method="post">
        <button type="submit" name="intent" value="sampleIntent">
          Submit Home Route Action
        </button>
      </form>
    </div>
  );
}
