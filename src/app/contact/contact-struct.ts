export class ContactStruct {
  constructor(
    public name: string,
    public society: string,
    public email: string,
    public tel: string,
    public message: string
  ) {
    this.name = name;
    this.society = society;
    this.email = email;
    this.tel = tel;
    this.message = message;
  }
}
