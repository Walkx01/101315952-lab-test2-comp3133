export interface Mission {
  mission_name: string;
  launch_year: string;
  details: string;
  links: {
    mission_patch_small: string;
    wikipedia: string;
    video_link: string;
    article_link: string;


  };
  mission_id: string[];
  flight_number: number;
  launch_success: boolean;
  land_success: boolean;

  launch_site: {
    site_name_long: string;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
}
