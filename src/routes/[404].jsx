import Layout from "../components/Layout";

/**
 * @param {import("./types").RouteProps} props
 */
export default function ResourceNotFound({}) {
  return (
    <Layout
      title="404 - Resource Not Found"
      description="The resource you requested has not been found at the specified
    address."
    >
      <h1>404 - Resource not found</h1>
    </Layout>
  );
}
