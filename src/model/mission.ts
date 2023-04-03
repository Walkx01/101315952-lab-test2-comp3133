export interface Mission {
  mission_name: string;
  launch_year: string;
  details: string;
  links: {
    mission_patch_small: string;
  };
  mission_id: string[];
  flight_number: number;
  launch_success: boolean;
  land_success: boolean;
}
