enum Membership {
  Simple,
  Standart,
  Premium,
}
const membership = Membership.Standart;
console.log(membership); // 1
const membershipReverse = Membership[2];
console.log(membershipReverse); // Premium

enum SocialMedia {
  VK = "vk",
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
}
const social = SocialMedia.INSTAGRAM;
console.log(social); // intagram
