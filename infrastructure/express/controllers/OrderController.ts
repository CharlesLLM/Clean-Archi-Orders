import { Request, Response } from "express";
import { AddReservationUsecase } from "../../../application/usecases/AddReservationUsecase";
import { EnableReservationUsecase } from "../../../application/usecases/EnableReservationUsecase";
import { ListReservationsUsecase } from "../../../application/usecases/ListReservationsUsecase";
import { ReservationRepository } from "../../../application/ports/repositories/ReservationRepository";
import { ReservationEntity } from "../../../domain/entities/ReservationEntity";

export class ReservationController {
  public constructor(
    private readonly reservationRepository: ReservationRepository,
  ) {}

  public async createReservation(request: Request, response: Response) {
    const customer = request.body.customer;
    const travelNumber = request.body.travelNumber;

    if (!customer || !travelNumber) {
      response.status(400).json({
        message: "Missing required fields: customer, travelNumber.",
      });

      return;
    }

    const addReservationUsecase = new AddReservationUsecase(this.reservationRepository);
    await addReservationUsecase.execute(customer, travelNumber);

    response.status(201).json({
      message: "Reservation successfully created.",
    });
  }

  public async listReservations(_: Request, response: Response) {
    const listReservationsUsecase = new ListReservationsUsecase(this.reservationRepository);
    const reservations = await listReservationsUsecase.execute();

    response.json(reservations);
  }

  public async enableReservation(request: Request, response: Response) {
    const enableReservationUsecase = new EnableReservationUsecase(this.reservationRepository);
    const uniqueNumber = request.params.uniqueNumber;

    await enableReservationUsecase.execute(uniqueNumber);

    response.status(200).json({
      message: "Reservation successfully enabled.",
    })
  }
}
