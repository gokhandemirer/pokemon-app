interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <div className="flex justify-between items-center px-3 py-5 bg-gray-50 border-b-gray-200 border-b">
        <h1>{title}</h1>
      </div>
    </header>
  );
}
