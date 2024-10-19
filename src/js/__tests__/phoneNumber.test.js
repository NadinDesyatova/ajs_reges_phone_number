import PhoneNumber from "../phoneNumber";


test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000']
])(
  ('should correct phone number %s to %s' ), 
  (phone, expected) => {
    const newPhone = new PhoneNumber(phone);
    const result = newPhone['phone'];

    expect(result).toEqual(expected);
  }
);
