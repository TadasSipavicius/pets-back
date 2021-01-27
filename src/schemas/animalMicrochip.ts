const animalMicrochipTypeDef = `
"Animal microchip status valid values"
enum MicrochipStatus { Implanted, Removed }

"Represents an animal microchip."
type AnimalMicrochip {
  "Animal id, for example 2"
  animalId: Int!
  "Microchip id"
  microchipId: String!
  "Microchip install date"
  installDate: String
  "Microchip status ('Implanted' or 'Removed')"
  status: MicrochipStatus
}`;

export default animalMicrochipTypeDef;

