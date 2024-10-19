export default class PhoneNumber {
  constructor(phone) {
    this.phone = phone.replace(
      /^(\+7|8)?(\+\d{2})?\s*\(?(\d{3})\)?\s*(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/, 
      (match, p1, p2, p3, p4, p5, p6) => {
        const result =  p1 ? `+7${p3}${p4}${p5}${p6}` : `${p2}${p3}${p4}${p5}${p6}`;
        return result;
      }
    );
  }
};
