import { Button } from "antd";

export default ({ children, onClick, type, size, style, className, disable, loading }) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      type={type}
      size={size}
      style={style}
      disabled={disable}
      loading={loading}
    >
      {children}
    </Button>
  );
};
