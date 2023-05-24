using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back.Migrations
{
    /// <inheritdoc />
    public partial class test4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Entry",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entry", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Feature",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    smoking = table.Column<bool>(type: "bit", nullable: false),
                    pets = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    drink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    food = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    wifi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    parking = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feature", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Ranking",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Sum = table.Column<int>(type: "int", nullable: false),
                    Count = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ranking", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    short_description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    date_start = table.Column<DateTime>(type: "datetime2", nullable: false),
                    date_end = table.Column<DateTime>(type: "datetime2", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ticket_price = table.Column<float>(type: "real", nullable: false),
                    idComment = table.Column<int>(type: "int", nullable: false),
                    idFeature = table.Column<int>(type: "int", nullable: false),
                    idRanking = table.Column<int>(type: "int", nullable: false),
                    idEntry = table.Column<int>(type: "int", nullable: false),
                    Featureid = table.Column<int>(type: "int", nullable: false),
                    RankingId = table.Column<int>(type: "int", nullable: false),
                    Entryid = table.Column<int>(type: "int", nullable: false),
                    is_active = table.Column<bool>(type: "bit", nullable: false),
                    status = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.id);
                    table.ForeignKey(
                        name: "FK_Event_Entry_Entryid",
                        column: x => x.Entryid,
                        principalTable: "Entry",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Event_Feature_Featureid",
                        column: x => x.Featureid,
                        principalTable: "Feature",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Event_Ranking_RankingId",
                        column: x => x.RankingId,
                        principalTable: "Ranking",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Coment",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: false),
                    idUser = table.Column<int>(type: "int", nullable: false),
                    idEvent = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coment", x => x.id);
                    table.ForeignKey(
                        name: "FK_Coment_Event_idEvent",
                        column: x => x.idEvent,
                        principalTable: "Event",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Coment_User_idUser",
                        column: x => x.idUser,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Coment_idEvent",
                table: "Coment",
                column: "idEvent",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Coment_idUser",
                table: "Coment",
                column: "idUser");

            migrationBuilder.CreateIndex(
                name: "IX_Event_Entryid",
                table: "Event",
                column: "Entryid");

            migrationBuilder.CreateIndex(
                name: "IX_Event_Featureid",
                table: "Event",
                column: "Featureid");

            migrationBuilder.CreateIndex(
                name: "IX_Event_RankingId",
                table: "Event",
                column: "RankingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Coment");

            migrationBuilder.DropTable(
                name: "Event");

            migrationBuilder.DropTable(
                name: "Entry");

            migrationBuilder.DropTable(
                name: "Feature");

            migrationBuilder.DropTable(
                name: "Ranking");
        }
    }
}
