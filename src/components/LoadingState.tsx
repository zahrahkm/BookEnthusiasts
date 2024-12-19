import { Container } from "./Container";

interface LoadingStateProps {
  items?: number;
  itemHeight?: string;
  containerHeight?: string;
  mdCols?: number;
}

export const LoadingState = ({
  items,
  itemHeight = "h-24",
  containerHeight = "h-96",
  mdCols = 3,
}: LoadingStateProps) => {
  return (
    <Container>
      <div className="animate-pulse">
        {items ? (
          <>
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className={`grid grid-cols-1 md:grid-cols-${mdCols} gap-6`}>
              {[...Array(items)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-gray-200 rounded-lg ${itemHeight}`}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className={`bg-gray-200 rounded-lg ${containerHeight}`} />
          </>
        )}
      </div>
    </Container>
  );
};
