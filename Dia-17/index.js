let hotels = [];
let reservations = [];
let confirmationUser = true;

class Hotel {
  Id;
  Name;
  Category;
  Address;
  Phone;

  constructor(id, name, category, address, phone) {
    this.Id = id;
    this.Name = name;
    this.Category = category;
    this.Address = address;
    this.Phone = phone;
  }
}

class Reservation {
  Id;
  HotelId;
  NamePerson;
  DayIn;
  DayOut;

  constructor(id, hotelId, namePerson, dayIn, dayOut) {
    this.Id = id;
    this.HotelId = hotelId;
    this.NamePerson = namePerson;
    this.DayIn = dayIn;
    this.DayOut = dayOut;
  }
}

function registerHotel() {
  let idHotel = prompt("Escreva o ID do hotel: ");
  let nameHotel = prompt("Escreva o nome do hotel: ");
  let categoryHotel = prompt("Escreva a categoria do hotel: ");
  let addressHotel = prompt("Escreva o endereço do hotel: ");
  let phoneHotel = prompt("Escreva o telefone do hotel: ");

  let verifyId = hotels.find((hotel) => hotel.Id === idHotel);

  if (verifyId) {
    console.log(`Id ${verifyId} já cadastrado!`);
  } else {
    let hotelUser = new Hotel(
      idHotel,
      nameHotel,
      categoryHotel,
      addressHotel,
      phoneHotel
    );

    hotels.push(hotelUser);
  }
}

function registerReservation() {
  let id = prompt("Escreva o ID da reserva: ");
  let idHotelReservation = prompt("Escreva o ID do hotel: ");
  let nameUser = prompt("Escreva o nome do responsável pela reserva: ");
  let dayInHotel = prompt("Escreva o dia de entrada do hotel: ");
  let dayOutHotel = prompt("Escreva o dia de saída do hotel: ");

  let verifyIdReservation = reservations.find((res) => res.Id === id);

  if (verifyIdReservation) {
    console.log(`Id ${verifyIdReservation} já cadastrado!`);
  } else {
    let reservationUser = new Reservation(
      id,
      idHotelReservation,
      nameUser,
      dayInHotel,
      dayOutHotel
    );

    reservations.push(reservationUser);
  }
}

function informationHotel(idHotelToFind) {
  let reservation = reservations.find((res) => res.HotelId === idHotelToFind);

  if (reservation) {
    let hotelToFind = hotels.find((hotel) => hotel.Id === idHotelToFind);

    if (hotelToFind) {
      console.log(`Nome do hotel: ${hotelToFind.Name}`);
      console.log(
        `Nome do responsável pela reserva: ${reservation.NamePerson}`
      );
      console.log(`Dia de entrada: ${reservation.DayIn}`);
      console.log(`Dia de saída: ${reservation.DayOut}`);
    } else {
      console.log(`Hotel não encontrado`);
    }
  } else {
    console.log(`Reserva não encontrada`);
  }
}

function reservationInformation(idReservation) {
  let reservationToFind = reservations.find((res) => res.Id === idReservation);

  if (reservationToFind) {
    let identificationHotel = hotels.find(
      (hotel) => hotel.Id === reservationToFind.HotelId
    );

    if (identificationHotel) {
      console.log(`Nome do hotel: ${identificationHotel.Name}`);
      console.log(`Endereço do hotel: ${identificationHotel.Address}`);
      console.log(`Dia de entrada: ${reservationToFind.DayIn}`);
      console.log(`Dia de saída: ${reservationToFind.DayOut}`);
    } else {
      console.log("Hotel não encontrado!");
    }
  } else {
    console.log("Reserva não encontrada!");
  }
}

function findReservationByName(nameOfPerson) {
  let searchName = reservations.filter(
    (nam) => nam.NamePerson === nameOfPerson
  );
  console.log(searchName);
}

function findByCategoryHotel(category) {
  let searchCategory = hotels.filter((hotel) => hotel.Category === category);

  console.log(searchCategory);
}

function changePhoneNumber(idOfHotel, phoneNumber) {
  let findHotel = hotels.find((hotel) => hotel.Id === idOfHotel);

  if (findHotel) {
    findHotel.Phone = phoneNumber;
    console.log(
      `Número de telefone do hotel com ID ${idOfHotel} alterado para ${phoneNumber}.`
    );
  } else {
    console.log(`Id ${idOfHotel} do hotel não encontrado.`);
  }
}

while (confirmationUser) {
  let questionUser = prompt(`Escolha alguma das opções: 1-Cadastrar um hotel;
  2-Fazer uma reserva;
  3-Reservas feitas em um hotel;
  4-Informações sobre uma reserva;
  5-Reservas no nome do responsável;
  6-Hotéis baseado na categoria;
  7-Alteração do telefone do hotel;
  8-Encerrar programa!`);

  switch (questionUser) {
    case "1":
      registerHotel();
      break;

    case "2":
      registerReservation();
      break;

    case "3":
      let idOfHotelToFind = prompt(
        "Escreva o ID do hotel em que deseja ver as reservas:"
      );
      informationHotel(idOfHotelToFind);
      break;

    case "4":
      let idOfReservationToFind = prompt(
        "Escreva o ID da reserva que deseja saber: "
      );
      reservationInformation(idOfReservationToFind);
      break;

    case "5":
      let nameOfResponsable = prompt(
        "Digite em qual nome está registrado a reserva:"
      );
      findReservationByName(nameOfResponsable);
      break;

    case "6":
      let categoryHotel = prompt("Escreva qual categoria de hotel deseja ver:");
      findByCategoryHotel(categoryHotel);
      break;

    case "7":
      let idOfHotel = prompt("Escreva o Id do hotel:");
      let newPhoneNumber = prompt("Escreva o novo telefone:");
      changePhoneNumber(idOfHotel, newPhoneNumber);
      break;

    case "8":
      console.log("Encerrando programa!");
      confirmationUser = false;
      break;

    default:
      console.log("Opção inválida");
  }
}
