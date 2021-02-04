/*
 * Title:
    Holiday III - Fire on the boat


 * Description:
    Enjoying your holiday, you head out on a scuba diving trip!

    Disaster!! The boat has caught fire!!

    You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.



 * Examples:
    Test.describe("Example tests",_=>{
        Test.assertEquals(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
        Test.assertEquals(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
        Test.assertEquals(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");
    });


 * Kata Link:
    https://www.codewars.com/kata/57e8fba2f11c647abc000944/train/javascript
*/

// Short Solution
const fireFight = s => s.replace(/Fire/ig, '~~')
