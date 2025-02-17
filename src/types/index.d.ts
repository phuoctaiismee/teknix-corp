export interface IGlobalLayoutProps {
  children: React.ReactNode;
}

export interface IPagination {
  page: number;
  limit: number | "all";
}
