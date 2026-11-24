// Hand-written sample incidents (no AI involved).
// Every fact must be verified against the cited report.
export const incidents = {
  tenerife1977: {
    incident: {
      title: "Tenerife runway collision, 1977",
      summary:
        "On 27 March 1977, two Boeing 747s (KLM 4805 and Pan Am 1736) were diverted to Tenerife after a bomb scare at Las Palmas airport and ended up on the same runway in low cloud. The KLM crew began its takeoff roll without a takeoff clearance and collided with the Pan Am aircraft, which was still taxiing on the runway. This report studies the human and system factors that led the KLM crew to believe the runway was clear.",
      source:
        "Human Factors Report on the Tenerife Accident, Air Line Pilots Association (ALPA), Engineering and Air Safety. URL: https://skybrary.aero/bookshelf/alpa-report-1977-tenerife-disaster,
    },
    links: [
      {
        id: 1,
        layer: "Training",
        hole: "The KLM captain headed the airline's flight training department and had not flown regular line flights for about 12 weeks. The report suggests that long exposure to simulator-style operations, where clearances come quickly and crews never wait, may have blurred real-world procedure. The first officer and flight engineer also did not firmly challenge him.",
        prevention:
          "Instructor pilots should fly most of their hours on regular line operations, and all crew members should be trained in how to interact in the cockpit (ALPA Recommendations 2 and 10).",
      },
      {
        id: 2,
        layer: "Procedure",
        hole: "Radio communication was ambiguous. The route clearance given to KLM contained the word \"takeoff\", the crew asked for route and takeoff clearance in one message, and the controller's \"stand by for takeoff\" was partly blocked by another transmission. The controller never obtained a clear acknowledgement, and accents and language differences made things worse.",
        prevention:
          "Use only standardized phraseology, never use the words \"take off\" in a route clearance, and make sure a route clearance cannot be mistaken for a takeoff clearance (ALPA Recommendations 1, 3 and 4).",
      },
      {
        id: 3,
        layer: "Equipment",
        hole: "The airport had no ground radar, no runway visibility measuring equipment, and its runway centerline lights were out of service. Taxiways had no signs or markings, and there was no second system to confirm that a takeoff clearance had really been given.",
        prevention:
          "Install ground radar at air carrier airports and provide a redundant way to confirm takeoff clearance (ALPA Recommendations 5 and 9).",
      },
      {
        id: 4,
        layer: "Oversight",
        hole: "The airport was overloaded with diverted flights, yet the tower controller position was not manned, two controllers worked three frequencies, and an improvised routing put two 747s on the active runway at the same time in very poor visibility. New Dutch duty-time rules also left the KLM captain no discretion and added time pressure.",
        prevention:
          "Commercial aircraft should not taxi in visibility below 150 meters unless suitable lighting or visual aids and ground radar are working (ALPA Recommendation 6).",
      },
    ],
    outcome:
      "A crew that believed it had takeoff clearance accelerated down a runway that was still occupied. Three chances to stop the takeoff were missed, and the two aircraft collided.",
  },
};

// The UI uses this for now. Person A will later replace the body
// with the real AI call; the return shape stays the same.
export async function getChain(incidentId) {
  return incidents[incidentId];
}