import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: [".tools/**", "node_modules/**", ".next/**", "out/**"] },
  ...nextVitals,
  ...nextTypescript,
];

export default eslintConfig;
