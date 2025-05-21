interface Props {
  className?: string;
  size?: number;
  priority?: boolean;
}

const Rin_Avatar = ({ className, size = 100, priority = false }: Props) => {
  return (
<div className={`relative rounded-full overflow-hidden ${className || ''}`} 
     style={{ width: size, height: size }}>
  <img
    src="/myavatar.jpg" 
    alt="Rinlaurant's avatar"
    width={size}
    height={size}
    loading={priority ? 'eager' : 'lazy'}
    className="object-cover w-full h-full 
      -translate-y-5    // 基础偏移
      sm:-translate-y-5  // 小屏保持
      md:-translate-y-5  // 中屏微调
      lg:-translate-y-5" // 大屏加强
  />
</div>
  );
};

export default Rin_Avatar;