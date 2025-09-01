import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Api() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://openholidaysapi.org/PublicHolidays?countryIsoCode=NL&languageIsoCode=EN&validFrom=2025-01-01&validTo=2025-12-31"
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  function convert_date(iso) {
    let my_date = new Date(iso);
    let formatted_date = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "2-digit",
    }).format(my_date);

    return formatted_date;
  }

  return (
    <div>
      <ul>
        {data?.map((holiday) => (
          <li key={holiday.id}>
            - {convert_date(holiday.startDate)} {holiday.name[0].text}
          </li>
        ))}
      </ul>
    </div>
  );
}
