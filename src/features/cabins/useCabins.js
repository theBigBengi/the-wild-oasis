import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useCabins() {
  const [searchParams] = useSearchParams();

  const {
    isLoading,
    data: { data: cabins, count } = {},
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  // Filter

  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins || [];
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // Sort

  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return { isLoading, error, cabins: sortedCabins, count };
}
