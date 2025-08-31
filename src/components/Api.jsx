import { useState } from "react";
import {
  QueryClient,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Api() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://openholidaysapi.org/PublicHolidays?countryIsoCode=NL&languageIsoCode=EN&validFrom=2025-01-01&validTo=2025-12-31").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
   console.log(data)

  return (
    <div>
     <ul>
        {data?.map(holiday => (
          <li key={holiday.id}>
            {holiday.name[0].text} - {holiday.startDate}
          </li>
        ))}
      </ul>
    </div>
  );
}
