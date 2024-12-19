import { PropsWithChildren } from "react";

type Props = {
  loading?: boolean;
  error?: string;
};

export function Container({ children }: PropsWithChildren<Props>) {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 mt-3">
      {children}
    </div>
  );
}
