(function () {

    "use strict";

    describe("Meteor startup", function () {

        it("inserts players into the Players collection if it's empty", function () {
            spyOn(Players, 'find').andReturn({ count: function () {
                return 0;
            } });
            spyOn(Players, 'insert');
            Meteor.runStartupMethods();
            expect(Players.find.calls.length).toEqual(1);
            expect(Players.insert.calls.length).toEqual(6);
        });

        it("doesn't insert players into the Players collection if there are players in there already", function () {
            spyOn(Players, 'find').andReturn({ count: function () {
                return 1;
            } });
            spyOn(Players, 'insert');
            Meteor.runStartupMethods();
            expect(Players.find.calls.length).toEqual(1);
            expect(Players.insert.calls.length).toEqual(0);
        });

        it("inserts my club into the Clubs collection if it's empty", function () {


            spyOn(Clubs, 'find').andReturn({ count: function () {
                return 0;
            } });
            spyOn(Clubs, 'insert');
            Meteor.runStartupMethods();
            expect(Clubs.find.calls.length).toEqual(1);
            expect(Clubs.insert.calls.length).toEqual(1);
        });


    });

})();