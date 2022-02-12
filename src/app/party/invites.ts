export interface IInvite {
  id: number;
  name: string;
  passcode?: string;
  rsvp: boolean | null;
}
// @ts-ignore
export const INVITES: IInvite[] = [
  {
    id: 1,
    name: 'Mike',
    passcode: 'IsAwesome',
    rsvp: true,
  },
  {
    id: 2,
    name: 'Kira',
    passcode: 'IsNotAsAwesomeAsMike',
    rsvp: false,
  },
  {
    id: 2,
    name: 'Krrsantin',
    passcode: 'kboi',
    rsvp: null,
  },
];
