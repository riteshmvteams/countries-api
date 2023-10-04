export default function SkelLoader({ height, width, marginBottom }) {
  return (
    <div
      style={{
        height,
        width,
        borderRadius: "0.75rem",
        marginBottom,
      }}
      className="skelLoader"
    ></div>
  );
}
