'use client';

import india from "@svg-maps/india";
import { cn } from "@/lib/utils";

/**
 * Maps each Indian state's official name (from @svg-maps/india)
 * to the matching recipe tag used in src/lib/recipes/index.ts.
 */
const stateToTagMap: Record<string, string> = {
  "Tamil Nadu": "Tamil Nadu",
  "Kerala": "Kerala",
  "Karnataka": "Karnataka",
  "Andhra Pradesh": "Andhra Pradesh",
  "Telangana": "Telangana",
  "Punjab": "Punjabi",
  "West Bengal": "West Bengal",
  "Gujarat": "Gujarat",
  "Maharashtra": "Maharashtra",
  "Rajasthan": "Rajasthani",
  "Goa": "Goan",
  "Jammu and Kashmir": "Jammu and Kashmir",
  "Delhi": "Delhi",
  "Uttar Pradesh": "Uttar Pradesh",
  "Haryana": "Haryana",
  "Himachal Pradesh": "Himachal Pradesh",
  "Uttarakhand": "Uttarakhand",
  "Madhya Pradesh": "Madhya Pradesh",
  "Bihar": "Bihar",
  "Chhattisgarh": "Chhattisgarh",
  "Odisha": "Odisha",
  "Jharkhand": "Jharkhand",
  "Assam": "Assam",
  "Arunachal Pradesh": "Arunachal Pradesh",
  "Manipur": "Manipur",
  "Meghalaya": "Meghalaya",
  "Mizoram": "Mizoram",
  "Nagaland": "Nagaland",
  "Sikkim": "Sikkim",
  "Tripura": "Tripura",
  "Puducherry": "Puducherry",
  "Chandigarh": "Chandigarh",
  "Ladakh": "Ladakh",
  "Dadra and Nagar Haveli": "Dadra and Nagar Haveli",
  "Daman and Diu": "Daman and Diu",
  "Lakshadweep": "Lakshadweep",
  "Andaman and Nicobar Islands": "Andaman and Nicobar Islands"
};

interface IndiaRegionMapProps {
  onRegionSelect: (tag: string | null, stateName: string) => void;
  selectedStateName: string | null;
}

/**
 * IndiaRegionMap - Interactive SVG map of India states.
 * Manually rendered to avoid React 19 compatibility issues with react-svg-map.
 */
export function IndiaRegionMap({ onRegionSelect, selectedStateName }: IndiaRegionMapProps) {
  return (
    <div className="india-map-wrapper w-full max-w-lg mx-auto">
      <svg
        viewBox={india.viewBox}
        className="india-svg-map"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={india.label}
      >
        {india.locations.map((location) => {
          // Check if this specific state is currently selected by its unique name
          // This prevents broad regional tags (like "North Indian") from highlighting multiple states
          const isSelected = selectedStateName === location.name;
          
          return (
            <path
              key={location.id}
              id={location.id}
              d={location.path}
              className={cn(
                "svg-map-location",
                isSelected ? "svg-map-location-selected" : ""
              )}
              onClick={() => {
                // Map the location name to our recipe tag system
                const tag = stateToTagMap[location.name] || location.name;
                onRegionSelect(tag, location.name);
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  const tag = stateToTagMap[location.name] || location.name;
                  onRegionSelect(tag, location.name);
                }
              }}
            >
              <title>{location.name}</title>
            </path>
          );
        })}
      </svg>
    </div>
  );
}