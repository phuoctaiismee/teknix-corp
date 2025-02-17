"use client";

import { useGetListNewsQuery } from "@/stores/features/news";
import { IPagination } from "@/types";
import { useState, useCallback } from "react";

interface UseNewsActionsProps {     
  limit?: number | "all";
}

export const useNewsActions = ({ limit = 2 }: UseNewsActionsProps) => {
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    limit: limit,
  });

  const { data, isLoading, isFetching, isError } = useGetListNewsQuery(pagination);

  const totalPages = data?.meta?.pagination?.pages ?? 1;
  const isLastPage = pagination.page >= totalPages;
  const isFirstPage = pagination.page <= 1;

  const handleNextPage = useCallback(() => {
    setPagination((prev) =>
      prev.page < totalPages ? { ...prev, page: prev.page + 1 } : prev
    );
  }, [pagination, totalPages]);

  const handlePrevPage = useCallback(() => {
    setPagination((prev) =>
      prev.page > 1 ? { ...prev, page: prev.page - 1 } : prev
    );
  }, [pagination]);

  const handlePagination = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setPagination((prev) => ({ ...prev, page }));
      }
    },
    [totalPages]
  );

  return {
    data,
    isLoading,
    isError,
    isFetching,
    page: pagination.page,
    totalPages,
    isFirstPage,
    isLastPage,
    handleNextPage,
    handlePrevPage,
    handlePagination,
  };
};
