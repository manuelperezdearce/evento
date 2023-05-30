using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back.Migrations
{
    /// <inheritdoc />
    public partial class test10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Coment_Event_idEvent",
                table: "Coment");

            migrationBuilder.DropForeignKey(
                name: "FK_Coment_User_idUser",
                table: "Coment");

            migrationBuilder.DropForeignKey(
                name: "FK_Event_Entry_Entryid",
                table: "Event");

            migrationBuilder.DropForeignKey(
                name: "FK_Event_Feature_Featureid",
                table: "Event");

            migrationBuilder.DropIndex(
                name: "IX_Coment_idEvent",
                table: "Coment");

            migrationBuilder.DropColumn(
                name: "idComment",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "idEntry",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "idFeature",
                table: "Event");

            migrationBuilder.RenameColumn(
                name: "wifi",
                table: "Feature",
                newName: "Wifi");

            migrationBuilder.RenameColumn(
                name: "smoking",
                table: "Feature",
                newName: "Smoking");

            migrationBuilder.RenameColumn(
                name: "pets",
                table: "Feature",
                newName: "Pets");

            migrationBuilder.RenameColumn(
                name: "parking",
                table: "Feature",
                newName: "Parking");

            migrationBuilder.RenameColumn(
                name: "food",
                table: "Feature",
                newName: "Food");

            migrationBuilder.RenameColumn(
                name: "drink",
                table: "Feature",
                newName: "Drink");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Feature",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "Event",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Event",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Event",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "Featureid",
                table: "Event",
                newName: "FeatureId");

            migrationBuilder.RenameColumn(
                name: "Entryid",
                table: "Event",
                newName: "EntryId");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Event",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ticket_price",
                table: "Event",
                newName: "TicketPrice");

            migrationBuilder.RenameColumn(
                name: "short_description",
                table: "Event",
                newName: "prueba");

            migrationBuilder.RenameColumn(
                name: "is_active",
                table: "Event",
                newName: "IsActive");

            migrationBuilder.RenameColumn(
                name: "idRanking",
                table: "Event",
                newName: "CommentId");

            migrationBuilder.RenameColumn(
                name: "date_start",
                table: "Event",
                newName: "DateStart");

            migrationBuilder.RenameColumn(
                name: "date_end",
                table: "Event",
                newName: "DateEnd");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "Event",
                newName: "CreatedAt");

            migrationBuilder.RenameIndex(
                name: "IX_Event_Featureid",
                table: "Event",
                newName: "IX_Event_FeatureId");

            migrationBuilder.RenameIndex(
                name: "IX_Event_Entryid",
                table: "Event",
                newName: "IX_Event_EntryId");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Entry",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Entry",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Entry",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Coment",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Coment",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "idUser",
                table: "Coment",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "idEvent",
                table: "Coment",
                newName: "EventId");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "Coment",
                newName: "CreatedAt");

            migrationBuilder.RenameIndex(
                name: "IX_Coment_idUser",
                table: "Coment",
                newName: "IX_Coment_UserId");

            migrationBuilder.RenameColumn(
                name: "type",
                table: "Category",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Category",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Category",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Category",
                newName: "Id");

            migrationBuilder.AddColumn<string>(
                name: "ShortDescription",
                table: "Event",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Url2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Url3 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Social",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Facebook = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Twitter = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Instagram = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Whatsapp = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Web = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Social", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Coment_EventId",
                table: "Coment",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_Coment_Event_EventId",
                table: "Coment",
                column: "EventId",
                principalTable: "Event",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Coment_User_UserId",
                table: "Coment",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Entry_EntryId",
                table: "Event",
                column: "EntryId",
                principalTable: "Entry",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Feature_FeatureId",
                table: "Event",
                column: "FeatureId",
                principalTable: "Feature",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Coment_Event_EventId",
                table: "Coment");

            migrationBuilder.DropForeignKey(
                name: "FK_Coment_User_UserId",
                table: "Coment");

            migrationBuilder.DropForeignKey(
                name: "FK_Event_Entry_EntryId",
                table: "Event");

            migrationBuilder.DropForeignKey(
                name: "FK_Event_Feature_FeatureId",
                table: "Event");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "Social");

            migrationBuilder.DropIndex(
                name: "IX_Coment_EventId",
                table: "Coment");

            migrationBuilder.DropColumn(
                name: "ShortDescription",
                table: "Event");

            migrationBuilder.RenameColumn(
                name: "Wifi",
                table: "Feature",
                newName: "wifi");

            migrationBuilder.RenameColumn(
                name: "Smoking",
                table: "Feature",
                newName: "smoking");

            migrationBuilder.RenameColumn(
                name: "Pets",
                table: "Feature",
                newName: "pets");

            migrationBuilder.RenameColumn(
                name: "Parking",
                table: "Feature",
                newName: "parking");

            migrationBuilder.RenameColumn(
                name: "Food",
                table: "Feature",
                newName: "food");

            migrationBuilder.RenameColumn(
                name: "Drink",
                table: "Feature",
                newName: "drink");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Feature",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Event",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Event",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "FeatureId",
                table: "Event",
                newName: "Featureid");

            migrationBuilder.RenameColumn(
                name: "EntryId",
                table: "Event",
                newName: "Entryid");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Event",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Event",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "prueba",
                table: "Event",
                newName: "short_description");

            migrationBuilder.RenameColumn(
                name: "TicketPrice",
                table: "Event",
                newName: "ticket_price");

            migrationBuilder.RenameColumn(
                name: "IsActive",
                table: "Event",
                newName: "is_active");

            migrationBuilder.RenameColumn(
                name: "DateStart",
                table: "Event",
                newName: "date_start");

            migrationBuilder.RenameColumn(
                name: "DateEnd",
                table: "Event",
                newName: "date_end");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Event",
                newName: "created_at");

            migrationBuilder.RenameColumn(
                name: "CommentId",
                table: "Event",
                newName: "idRanking");

            migrationBuilder.RenameIndex(
                name: "IX_Event_FeatureId",
                table: "Event",
                newName: "IX_Event_Featureid");

            migrationBuilder.RenameIndex(
                name: "IX_Event_EntryId",
                table: "Event",
                newName: "IX_Event_Entryid");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Entry",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Entry",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Entry",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Coment",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Coment",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Coment",
                newName: "idUser");

            migrationBuilder.RenameColumn(
                name: "EventId",
                table: "Coment",
                newName: "idEvent");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Coment",
                newName: "created_at");

            migrationBuilder.RenameIndex(
                name: "IX_Coment_UserId",
                table: "Coment",
                newName: "IX_Coment_idUser");

            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Category",
                newName: "type");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Category",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Category",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Category",
                newName: "id");

            migrationBuilder.AddColumn<int>(
                name: "idComment",
                table: "Event",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "idEntry",
                table: "Event",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "idFeature",
                table: "Event",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Coment_idEvent",
                table: "Coment",
                column: "idEvent",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Coment_Event_idEvent",
                table: "Coment",
                column: "idEvent",
                principalTable: "Event",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Coment_User_idUser",
                table: "Coment",
                column: "idUser",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Entry_Entryid",
                table: "Event",
                column: "Entryid",
                principalTable: "Entry",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Feature_Featureid",
                table: "Event",
                column: "Featureid",
                principalTable: "Feature",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
