const OldAvailableSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00',
  '11:30', '14:00', '14:30', '15:00'
];

function bookSlot(slot){
    const SlotPosition = OldAvailableSlots.findIndex(loopSlot => loopSlot === slot);
    console.log(SlotPosition)

    const NewAvalableSlots = [... OldAvailableSlots]
    NewAvalableSlots.splice(SlotPosition, 1);

    console.log("Before Student Chose Time: " + OldAvailableSlots);
    console.log("After: " + NewAvalableSlots);
};

// A student books a class at 09:00
bookSlot('14:30');