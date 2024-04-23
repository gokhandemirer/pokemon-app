interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <header>
      <div className="flex justify-between items-center px-3 py-5 bg-gray-50 border-b-gray-200 border-b">
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}
